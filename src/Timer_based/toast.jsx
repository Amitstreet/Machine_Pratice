import { useState } from 'react';

// Container to hold and position all toasts
const ToastContainer = ({ position = 'top-right', children }) => {
  const positionStyles = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-4 left-1/2 -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2'
  };

  return (
    <div className={`fixed z-50 ${positionStyles[position]} flex flex-col gap-2`}>
      {children}
    </div>
  );
};

// Individual Toast component
const Toast = ({ message, type, progress = 1 }) => {
  const styles = {
    success: 'bg-green-500 border-green-600',
    error: 'bg-red-500 border-red-600',
    info: 'bg-blue-500 border-blue-600',
    warning: 'bg-yellow-500 border-yellow-600'
  };

  return (
    <div className={`min-w-[300px] relative overflow-hidden
      ${styles[type]} text-white p-4 rounded-lg shadow-lg animate-slide-in`}>
      <div className="flex items-center gap-2">
        {message}
      </div>
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
        <div 
          className="h-full bg-white/30 transition-all duration-75"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  );
};

const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'success') => {
    const id = Date.now();
    const toast = { id, message, type, progress: 1 };
    setToasts(prevToasts => [...prevToasts, toast]);
    const duration = 3000; // 3 seconds
    const interval = 100; // Update progress every 100ms
    const step = interval / duration;
    const intervalId = setInterval(() => {
      setToasts(prevToasts => {
        const updatedToasts = prevToasts.map(t =>
          t.id === id ? { ...t, progress: t.progress - step } : t
        );
        const toastToRemove = updatedToasts.find(t => t.id === id && t.progress <= 0);
        if (toastToRemove) {
          clearInterval(intervalId);
          return updatedToasts.filter(t => t.id !== id);
        }
        return updatedToasts;
      });
    }, interval);
  };
  return { toasts, showToast };
};

// Demo Component
const ToastifyDemo = () => {
  const { toasts, showToast } = useToast();
  return (
    <div className="p-4 space-y-4">
      <div className="space-x-2">
        <button 
          onClick={() => showToast('Success message!', 'success')}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Success
        </button>
        <button 
          onClick={() => showToast('Error message!', 'error')}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Error
        </button>
        <button 
          onClick={() => showToast('Info message!', 'info')}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Info
        </button>
        <button 
          onClick={() => showToast('Warning message!', 'warning')}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Warning
        </button>
      </div>
      <ToastContainer>
        {toasts.map(toast => (
          <Toast key={toast.id} {...toast} />
        ))}
      </ToastContainer>
    </div>
  );
};

export default ToastifyDemo;

// Add to your CSS
const styles = `
@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-in {
  animation: slideIn 0.3s ease-out forwards;
}
`;
