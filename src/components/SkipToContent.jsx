/**
 * Skip to main content link for accessibility
 */
const SkipToContent = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-[#0a0a0a] focus:rounded-lg focus:font-semibold focus:outline-none focus:ring-2 focus:ring-white/20"
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;
