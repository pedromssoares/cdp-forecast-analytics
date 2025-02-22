export default function LoadingSpinner() {
    return (
      <div className="flex justify-center items-center mt-6">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-opacity-50"></div>
      </div>
    );
  }