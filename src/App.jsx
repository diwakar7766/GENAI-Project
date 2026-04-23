import { RouterProvider } from "react-router"
import { router } from "./app.routes.jsx"
import { AuthProvider } from "./Features/auth/auth.context.jsx"
import { InterviewProvider } from "./Features/interview/interview.context.jsx"
function App() {
  return (
    <div>
      <AuthProvider>
        <InterviewProvider>
          <RouterProvider router={router} />
        </InterviewProvider>
      </AuthProvider>
    </div>
  )
}

export default App
