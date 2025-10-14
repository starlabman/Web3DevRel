export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-accent rounded-full animate-spin mx-auto" style={{ animationDelay: '0.5s' }}></div>
        </div>
        <p className="text-muted-foreground">Chargement...</p>
      </div>
    </div>
  )
}
