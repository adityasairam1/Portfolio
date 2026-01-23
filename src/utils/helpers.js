/**
 * Utility functions for common operations
 */

/**
 * Scrolls to a section smoothly
 * @param {string} sectionId - The ID of the section to scroll to (with or without #)
 */
export const scrollToSection = (sectionId) => {
  const id = sectionId.startsWith('#') ? sectionId : `#${sectionId}`;
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Downloads resume file
 * @param {string} resumeUrl - URL to the resume
 * @param {string} name - Name for the downloaded file
 */
export const downloadResume = async (resumeUrl, name) => {
  try {
    const response = await fetch(resumeUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${name.replace(/\s+/g, '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch {
    window.open(resumeUrl, '_blank');
  }
};
