
import { LoginForm } from '../components/auth/LoginForm';

export const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`,
          }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-md p-8">
        <LoginForm />
      </div>
    </div>
  );
};