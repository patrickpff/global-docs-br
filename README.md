# global-docs-br

Brazilian document **validators and formatters** for the `global-docs` ecosystem.

This package provides **pure, deterministic and well-tested utilities** to:
- validate Brazilian documents
- apply human-readable masks (input/display)
- generate valid test values (for unit testing only)

It is designed to be:
- framework-agnostic
- side-effect free
- suitable for backend, frontend and batch processing

---

## ✨ Features

- 🔍 **Validation** (business rules, check digits, official algorithms)
- 🎭 **Masking** (UX-friendly formatting for inputs and displays)
- 🧪 **Test helpers** to generate valid documents
- 📚 **Official sources referenced** (Sintegra, CIGAM, Receita Federal, etc.)

> Validation and masking responsibilities are intentionally separated.

---

## 📦 Supported Documents

### 🔥 Priority 1 — Core (Themis)

| Document | Validate | Mask |
|-------|----------|------|
| CPF | ✅ | ✅ |
| RG | ✅ | ✅ |
| CNPJ | ✅ | ✅ |
| OAB | ✅ | ✅ |
| CNJ Process Number | ✅ | ✅ |

---

### 🔥 Priority 2 — Professional Registries

| Document | Validate | Mask |
|-------|----------|------|
| CRM | ✅ | ✅ |
| CREA | ✅ | ✅ |
| CRC | ✅ | ✅ |
| CAU | ✅ | ✅ |
| CRO | ✅ | ✅ |

---

### 🔥 Priority 3 — Complementary

| Document | Validate | Mask |
|-------|----------|------|
| CNH | ✅ | ✅ |
| Passport | ✅ | ✅ |
| Voter ID (Título de Eleitor) | ✅ | ✅ |
| State Registration (IE) | ✅ | ✅ |

---

## 🏛️ State Registration (IE)

Brazilian **Inscrição Estadual (IE)** validation is implemented **per state**, following
official rules and examples.

Each state has:
- its own validation algorithm
- its own mask pattern
- its own test helper

### ✔ Implemented States

All **27 Brazilian states** are supported.

---

## 📚 Official Sources

IE formats and validation rules were implemented based on **official and semi-official documentation**, including:

- **CIGAM Wiki**  
  https://www.cigam.com.br/wiki/index.php?title=Qual_o_formato_da_Inscrição_Estadual_por_Estado%3F

- **Sintegra (official state tax systems)**  
  http://www.sintegra.gov.br/  
  http://www.sintegra.gov.br/Cad_Estados/cad_{UF}.html

Whenever rules diverged, **Sintegra examples were treated as the source of truth**.

> Masks follow **official examples shown in Sintegra pages**, not arbitrary formatting.

---

## 🧠 Design Principles

### 1. Validation ≠ Masking

Validation:
- checks digits
- applies mathematical rules
- ignores formatting characters

Masking:
- formats partial or complete input
- is tolerant to incomplete values
- never validates business rules

---

### 2. Partial Masking (UX-friendly)

All masks are designed to work while typing:

```ts
mask("1234")      → "12.34"
mask("12345678")  → "12.345.678"
mask("123456789") → "12.345.678-9"
```


---

### 3. Testability First

Every document validator:
- has deterministic unit tests
- has a makeValid* helper to generate valid values
- never depends on real or sensitive data (LGPD-compliance on development)

> No real personal or company data is used or required.

---
## 🧪 Testing

Tests are organized by responsibility:
```
documents/
├─ cau/
│  ├─ __tests__/
│  │  ├─ cau.spec.ts
│  │  ├─ validate.spec.ts
│  │  └─ mask.spec.ts
│  ├─ cau.ts
│  ├─ index.ts
│  ├─ mask.ts
│  └─ validate.ts

├─ cnh/
│  ├─ __tests__/
│  │  ├─ cnh.spec.ts
│  │  ├─ validate.spec.ts
│  │  └─ mask.spec.ts
│  ├─ cnh.ts
│  ├─ index.ts
│  ├─ mask.ts
│  └─ validate.ts

├─ ie/
│  ├─ index.ts
│  ├─ registry.ts
│  ├─ types.ts
│  ├─ states/
│  │  ├─ ac.ts
│  │  ├─ al.ts
│  │  ├─ am.ts
│  │  ├─ ap.ts
│  │  └─ ...
│  └─ __tests__/
│     ├─ registry.spec.ts
│     ├─ mask.spec.ts        # generic IE mask routing
│     ├─ validate.spec.ts    # generic IE validate routing
│     ├─ helpers             # IE faker
│        ├─ ac.ts
│        ├─ al.ts
│        ├─ am.ts
│        ├─ ap.ts
│        └─ ...
│     └─ states/
│        ├─ ac.spec.ts
│        ├─ al.spec.ts
│        ├─ am.spec.ts
│        ├─ ap.spec.ts
│        └─ ...

```

---
## 🚫 What This Library Does NOT Do

❌ Does not query government services

❌ Does not verify document existence

❌ Does not store or log personal data

❌ Does not guess missing digits

This library only validates syntactic and mathematical correctness.

---
## 📌 Intended Use Cases

- Form validation
- Input masking
- Data normalization
- Import/export pipelines
- Legal / accounting systems
- ERP and CRM systems
- Automated testing

---
## ⚠️ Legal Notice

This project provides technical validation utilities only.

Passing validation does not imply legal validity or registration status.
Always consult official government services for authoritative verification.

---
## 🤝 Contributing

Contributions are welcome!

Please ensure:

- unit tests for new documents or states
- official sources are referenced
- validation and masking remain separated

---
📜 License

MIT