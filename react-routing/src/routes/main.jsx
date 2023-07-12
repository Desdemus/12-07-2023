import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Home from "./Home";
import Login from "../components/login";
import Dashboard from "./Dashboard";
import DefaultLayout from "../layouts/defaultLayout";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<h1>ABOUT</h1>} />
            <Route path="/who" />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Route>
    )
);