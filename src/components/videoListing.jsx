import React from 'react'

function videoListing() {
    return (
        <section class="video-listing">
        <div class="video-card">
                <img src="https://i.ytimg.com/vi/pyYseKtlXD4/0.jpg" class="img-responsive video-img" alt=""/>
                <span class="video-time">09:30</span>
            <div class="video-card-details">
                <img src="https://yt3.ggpht.com/H_---ano_f27DOCejDhUdBMtBcxcv32MoXmFKQc_mBcxYSH4HPZTGuBUdm7UgI5VlutMOVX2=s88-c-k-c0x00ffffff-no-rj" alt="" class="img-responsive video-channel-avatar"/>
                <div class="video-card-desc">
                    <h3 class="video-card-title">god of wars season 2 trailer</h3>
                    <div class="channel-name">carry</div>
                    <div class="video-views">200k views &nbsp; 2 months</div>
                </div>
                <svg width="3rem" height="3rem" viewBox="0 0 24 24"><path fill="#d6d6d6" d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"></path></svg>
            </div>
        </div>
    </section>
    )
}

export default videoListing
