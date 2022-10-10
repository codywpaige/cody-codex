import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function LeakOne() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  // on page load route to google.com
    window.location.href = "https://www.saltybet.com/";

  return (
    <div>
    </div>
  );
}

export default LeakOne;