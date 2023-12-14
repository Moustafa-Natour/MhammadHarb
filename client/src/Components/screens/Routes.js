// Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import CalendarComponent from './CalendarComponent';
import About from './AboutUs';
import Bio from './Bio';
import Services from './Services';
import Dashboard from './Dashboard';
import ImagesList from './ImagesList';
import MhBlog from './MhBlog';
import DailyChart from './DailyChart';
import FullFeaturedCrudGrid from './FullFeaturedCrudGrid';
import ServiceChooser from './ServiceChooser';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/calendar" element={<CalendarComponent />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/images" element={<ImagesList />} />
            <Route path="/mhblog" element={<MhBlog />} />
            <Route path="dailychart" element={<DailyChart />} />
            <Route path="fullfeaturecrugrid" element={<FullFeaturedCrudGrid />} />
            <Route path="ServiceChooser" element={<ServiceChooser />} />
        </Routes>
    );
}

export default AppRoutes;
