import React from 'react'

function Footer() {
    return (
        <>
            <footer id="footer">
                <div class="container">
                <div class="row">
                    <div class="col-lg-6 text-lg-left text-center">
                    <div class="copyright">
                        &copy; Copyright <strong>NorWeb</strong>. All Rights Reserved
                    </div>
                    <div class="credits">
                        Designed by <a href="github.com/tanveerns">Tanveer</a>
                    </div>
                    </div>
                    <div class="col-lg-6">
                    <nav class="footer-links text-lg-right text-center pt-2 pt-lg-0">
                        <a href="#intro" class="scrollto">Home</a>
                        <a href="#about" class="scrollto">About</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                    </nav>
                    </div>
                </div>
                </div>
            </footer>

            <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>    
        </>
    )
}

export default Footer
