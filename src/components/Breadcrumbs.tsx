import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  currentPage: string;
  parentPage?: { name: string; path: string };
}

export default function Breadcrumbs({ currentPage, parentPage }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-brand-bg py-3 px-4 md:px-8 border-b border-blue-100 text-xs md:text-sm font-sans flex items-center gap-2 overflow-x-auto whitespace-nowrap">
      <Link to="/" className="text-gray-500 hover:text-brand-primary flex items-center gap-1 transition-colors">
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>
      
      <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />
      
      {parentPage && (
        <>
          <Link to={parentPage.path} className="text-gray-500 hover:text-brand-primary transition-colors">
            {parentPage.name}
          </Link>
          <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />
        </>
      )}
      
      <span className="text-brand-accent font-medium">{currentPage}</span>
    </nav>
  );
}
