import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="main-footer">
            <div className="footer-bottom pt-50 pb-40">
                <div className="container">
                    <div className="copyright-text">
                        <p>
                            Copyright @{year}, <Link href="/">Pierre Beaufaron</Link> All
                            Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer