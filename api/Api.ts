export const getCars = async () => {
    return await fetch('https://static.gapless.app/app/challenge/data.json').then(async response => {
        return await response.json();
    }).catch((error) => {
        throw new Error(error);
    });
};