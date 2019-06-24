export async function getCarsContent(filterData: any){
    const url = `/cars?color=${filterData.color || ''}&manufacturer=${filterData.manufacturer || ''}&sort=${filterData.sort || ''}&page=${filterData.page || ''}`
    const response = await fetch(url);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
}

export async function getColorsContent(){
    const response = await fetch('/colors');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
}

export async function getManufacturersContent(){
    const response = await fetch('/manufacturers');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
}

export async function getCarDetailsContent(id: String){
    const response = await fetch(`/cars/${id}`);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
}