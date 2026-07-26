# 01 — Typing

## Mental model
Both ecosystems are **gradually typed**: runtime is still dynamic; types help editors and CI.

| Idea | TypeScript / JSDoc | Python |
|------|--------------------|--------|
| Annotate | `name: string` | `name: str` |
| Optional | `age?: number` / `number \| undefined` | `age: int \| None = None` |
| Union | `string \| null` | `str \| None` |
| Object shape | `interface` / `type` | `TypedDict`, `@dataclass`, `Protocol` |
| Generics | `<T>` | `TypeVar` / `list[T]` |
| Structural | interfaces are structural | `Protocol` |
| Check tool | `tsc`, eslint type-aware | `pyright`, `mypy` |

## Differences & exceptions

1. **TypeScript is a separate language/compile step.** Python annotations ship in `.py` and are ignored at runtime unless you read them.

2. **`null`/`undefined` vs `None`**
   - TS strict mode forces you to handle both empties.
   - Python has one empty singleton: `None`.

3. **Object models**
   - TS: interfaces for shapes of plain objects.
   - Python: prefer `dataclass` / Pydantic for domain objects; `TypedDict` for JSON-shaped dicts; `Protocol` for duck typing.

4. **Enforcement**
   - JS without TS: JSDoc is advisory unless you enable checkJs.
   - Python: same — annotations don't enforce anything until a type checker runs.

5. **Senior habit:** turn on strict mode (TS `strict`, pyright basic/strict) on day one of a new project.
