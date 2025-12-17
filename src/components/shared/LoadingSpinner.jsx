

export const LoadingSpinner = ({ size = 'md', color = 'yellow' }) => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const colors = {
    yellow: 'border-yellow-500',
    blue: 'border-blue-500',
    red: 'border-red-500',
    green: 'border-green-500'
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${sizes[size]} border-4 ${colors[color]} border-t-transparent rounded-full animate-spin`}
      ></div>
    </div>
  );
};