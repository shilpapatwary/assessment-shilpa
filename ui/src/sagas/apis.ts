export async function getCarsContent(){
    const response = await fetch('/cars');
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

export async function getCarDetailsContent(){
    const response = await fetch('/cars/:stocknumber');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
}