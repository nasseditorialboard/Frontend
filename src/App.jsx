// App root — React Router setup with AnimatePresence page transitions, Navbar, Footer
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'

import HomePage from './pages/HomePage'
import DepartmentsPage from './pages/DepartmentsPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import EventsPage from './pages/EventsPage'
import ExecutivesPage from './pages/ExecutivesPage'
import ResourcesPage from './pages/ResourcesPage'
import SportsPage from './pages/SportsPage'
import GalleryPage from './pages/GalleryPage'
import AlumniPage from './pages/AlumniPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  const location = useLocation()

  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Navbar />
      <main className="flex-1 pt-16">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/departments" element={<DepartmentsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/executives" element={<ExecutivesPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/sports" element={<SportsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/alumni" element={<AlumniPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
