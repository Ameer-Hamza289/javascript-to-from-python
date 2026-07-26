from __future__ import annotations

import json
import logging
import sys
from datetime import datetime, timezone


def create_logger(env: str) -> logging.Logger:
    logger = logging.getLogger("bridge")
    logger.handlers.clear()
    logger.setLevel(logging.INFO)

    handler = logging.StreamHandler(sys.stdout)

    if env == "production":

        class JsonFormatter(logging.Formatter):
            def format(self, record: logging.LogRecord) -> str:
                payload = {
                    "level": record.levelname.lower(),
                    "msg": record.getMessage(),
                    "time": datetime.now(timezone.utc).isoformat(),
                }
                if hasattr(record, "extra_data"):
                    payload.update(record.extra_data)
                return json.dumps(payload)

        handler.setFormatter(JsonFormatter())
    else:
        handler.setFormatter(logging.Formatter("%(levelname)s %(message)s"))

    logger.addHandler(handler)
    return logger
