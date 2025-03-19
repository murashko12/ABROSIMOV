import { FC, lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import DefaultLayout from "./layout/default"

const Routers: FC = () => {

    const LazyHomePage = lazy(async () => await import('./pages/HomePage'))
    const LazyChapterPage = lazy(async () => await import('./pages/ChapterPage'))
    const LazyLoginPage = lazy(async () => await import('./pages/LoginPage'))

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/login" element={<LazyLoginPage />} />
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<LazyHomePage />} />
                    <Route path="/:chapterId" element={<LazyChapterPage />} />
                </Route>
            </Routes>
        </Suspense>
    )
}

export default Routers