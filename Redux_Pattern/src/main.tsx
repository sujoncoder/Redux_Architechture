import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { Provider as ReduxProvider } from "react-redux"
import { router } from './routes/index.ts'
import { store } from './redux/store.ts'
import { Toaster } from 'sonner'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <div className='bg-slate-100 h-screen'>
        <RouterProvider router={router} />
        <Toaster richColors />
      </div>
    </ReduxProvider>
  </StrictMode>,
)
