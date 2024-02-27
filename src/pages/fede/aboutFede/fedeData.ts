type Profile = {
    name: string,
    picture: string,
    socialMedia: {
        fb?: string,
        tiktok?: string,
        twitter?: string,
        instagram?: string,
    },
}

const federico: Profile = {
    name: "Federico Santos",
    picture: "/federico/profile-pic.png",
    socialMedia: {
        fb: "https://www.facebook.com",
        tiktok: "https://www.tiktok.com",
        twitter: "https://www.twitter.com",
        instagram: "https://www.instagram.com"
    }
};

export default federico;