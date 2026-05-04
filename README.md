# 🏛️ ESTATE — Premium Luxury Real Estate Platform

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/FastAPI-0.100+-009688?style=for-the-badge&logo=fastapi" alt="FastAPI" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/SQLAlchemy-ORM-red?style=for-the-badge" alt="SQLAlchemy" />
  <img src="https://img.shields.io/badge/Framer_Motion-Animations-purple?style=for-the-badge&logo=framer" alt="Framer Motion" />
</p>

A **high-conversion, editorial-grade** luxury real estate template built for modern agencies, brokerages, and real estate entrepreneurs. Featuring cinematic animations, a full-stack CRUD backend, and a premium admin dashboard.

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🎬 **Cinematic Hero** | Auto-rotating background images with parallax indicators |
| 📊 **Stats Marquee** | Infinitely scrolling statistics bar for social proof |
| 🏡 **Featured Listings** | Dynamic property grid fetched from the backend API |
| 🌍 **Luxury Destinations** | Immersive city-level destination cards |
| ⭐ **Testimonials** | Client reviews with real avatars and star ratings |
| 🖥️ **Admin Dashboard** | Full CRUD inventory management with dialog forms |
| 🔍 **Search Page** | Grid + Map hybrid search experience |
| 📄 **Property Detail** | Dynamic detail pages with image gallery and inquiry form |
| 📱 **Fully Responsive** | Mobile-first design that scales beautifully |
| 🎨 **Gold + Charcoal Theme** | Luxury design system with editorial typography |

---

## 🚀 Tech Stack

### Frontend
- **Next.js 15** (App Router) — React framework with SSR
- **Tailwind CSS 4** — Utility-first styling
- **Framer Motion** — Cinematic animations and transitions
- **Shadcn UI + Base UI** — Premium component library
- **Lucide React** — Beautiful icon system
- **Axios** — HTTP client for API communication

### Backend
- **FastAPI** — High-performance Python API
- **SQLAlchemy** — ORM with SQLite (development) / PostgreSQL (production)
- **Pydantic** — Data validation schemas
- **Uvicorn** — ASGI server

---

## 📂 Project Structure

```
estate-platform/
├── backend/
│   ├── main.py              # FastAPI entry point (port 8001)
│   ├── database.py          # SQLAlchemy engine & session
│   ├── models/
│   │   └── property.py      # Property ORM model
│   ├── routes/
│   │   └── property.py      # CRUD API endpoints
│   ├── schemas/
│   │   └── property.py      # Pydantic request/response schemas
│   ├── seed_db.py           # Database seeder with sample data
│   ├── init_db.py           # Database initialization
│   └── requirements.txt     # Python dependencies
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx          # Homepage (Hero + Featured + CTA)
│   │   │   ├── admin/page.tsx    # Admin Dashboard (CRUD)
│   │   │   ├── search/page.tsx   # Search + Map view
│   │   │   ├── property/[id]/    # Dynamic property detail
│   │   │   └── globals.css       # Design system tokens
│   │   ├── components/
│   │   │   ├── layout/Navbar.tsx    # Scroll-aware navigation
│   │   │   ├── sections/Hero.tsx    # Rotating hero with search
│   │   │   ├── sections/FeaturedListings.tsx
│   │   │   └── shared/PropertyCard.tsx
│   │   └── lib/utils.ts
│   ├── next.config.ts
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🛠️ Quick Start

### Prerequisites
- **Node.js** ≥ 18
- **Python** ≥ 3.10
- **npm** or **yarn**

### 1. Clone the Repository
```bash
git clone https://github.com/VedantNair14/Real-Estate-Sample.git
cd Real-Estate-Sample
```

### 2. Backend Setup
```bash
cd backend
python -m venv venv
venv\Scripts\activate       # Windows
# source venv/bin/activate  # macOS/Linux
pip install -r requirements.txt
python init_db.py
python seed_db.py
python main.py              # Runs on http://localhost:8001
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev                 # Runs on http://localhost:3001
```

### 4. Open in Browser
- **Homepage**: [http://localhost:3001](http://localhost:3001)
- **Admin Dashboard**: [http://localhost:3001/admin](http://localhost:3001/admin)
- **Search**: [http://localhost:3001/search](http://localhost:3001/search)
- **API Docs**: [http://localhost:8001/docs](http://localhost:8001/docs)

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/properties` | List all properties |
| `GET` | `/api/properties/{id}` | Get property by ID |
| `POST` | `/api/properties` | Create new property |
| `DELETE` | `/api/properties/{id}` | Delete property |

---

## 🎨 Design Philosophy

This template follows an **editorial luxury** design language:

- **Typography**: Playfair Display (serif headings) + Inter (sans-serif body)
- **Color Palette**: Charcoal `#121212`, Gold `#D4AF37`, Warm White `#FAF9F6`
- **Spacing**: Generous whitespace with intentional density in content areas
- **Animations**: Smooth, elegant transitions using cubic-bezier easing
- **Imagery**: High-resolution Unsplash photography (8K-ready)

---

## 📋 Roadmap

- [x] Full-stack CRUD with SQLite
- [x] Dynamic property detail pages
- [x] Admin dashboard with Add/Delete
- [x] Responsive mobile design
- [ ] JWT Authentication
- [ ] Image upload (S3/Cloudinary)
- [ ] PostgreSQL production database
- [ ] Vercel + Railway deployment
- [ ] Advanced search filters
- [ ] Agent profiles & scheduling

---

## 📜 License

This project is a **sample template** for demonstration purposes. Commercial use requires permission.

---

<p align="center">
  Built with precision by <strong>Vedant Nair</strong><br/>
  <sub>Crafting digital experiences that convert.</sub>
</p>
