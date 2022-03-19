import React, { useEffect } from 'react'
import { useState } from 'react'

function useDocumentTitle(counter) {
    useEffect(() => {
        document.title = counter
    }, [counter])

}

export default useDocumentTitle