import image from "$lib/images/Image1.jpg";

export const load = async () => {
    const crowdfundings = [
        {
            title: "Sedekah Bangun Sekolah Gratis Untuk Ratusan Anak Yatim Dan Dhufa",
            slug: 'sedekah-bangun-sekolah-gratis-untuk-ratusan-anak-yatim-dan-dhufa',
            img: image,
            author: {
                name: "PW Ansor DIY",
                verified: true,
            },
            collected: "Rp102.360.000",
            unggulan: true,
        },
        {
            title: "Sedekah Bangun Sekolah Gratis Untuk Ratusan Anak Yatim Dan Dhufa",
            slug: 'sedekah-bangun-sekolah-gratis-untuk-ratusan-anak-yatim-dan-dhufa',
            img: image,
            author: {
                name: "PW Ansor DIY",
                verified: false,
            },
            collected: "Rp100.000.000",
            unggulan: true,
        },
		{
            title: "Sedekah Bangun Sekolah Gratis Untuk Ratusan Anak Yatim Dan Dhufa",
            slug: 'sedekah-bangun-sekolah-gratis-untuk-ratusan-anak-yatim-dan-dhufa',
            img: image,
            author: {
                name: "PW Ansor DIY",
                verified: false,
            },
            collected: "Rp100.000.000",
            unggulan: false,
        }
    ]
    return {
        data: crowdfundings
    }
};