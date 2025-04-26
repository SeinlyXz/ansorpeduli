export const load = async (context) => {
    const { url } = context
    const dummyData = [
        {
            id: 1,
            slug: 'sedekah-bangun-sekolah-gratis-untuk-ratusan-anak-yatim-dan-dhufa',
            description: 'Sedekah bangun sekolah gratis untuk ratusan anak yatim dan dhufa',
            collected: 102_360_000,
            target: 200_000_000,
            author: {
                name: 'PW Ansor DIY',
                verified: true,
            },
        }
    ]

    if(dummyData.map(data => data.slug).includes(url.pathname.split('/')[2])) {
        return {
            data: dummyData.find(data => data.slug === url.pathname.split('/')[2])
        }
    }
    return {
        data: dummyData
    }
};