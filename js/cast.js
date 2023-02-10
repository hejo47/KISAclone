// getUltraSrtNcst(초단기실황), getVilageFcst(단기예보)
const castBox = document.querySelector('#container');
let statusText, rainIcon;
rainIcon = [
    '<i class="bi bi-brightness-high"></i>',
    '<i class="bi bi-cloud-drizzle"></i>',
    '<i class="bi bi-cloud-haze"></i>',
    '<i class="bi bi-snow"></i>',
];
let url = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/"; /*URL*/
let params = {
    type: ['getUltraSrtNcst', 'getVilageFcst'],
    key: 'L%2Fb%2BfQ9y55je7IXprugDIh9H%2F2k29xdC4W4IqCo36EPBgUz8DVdtezAHCrk4aRyQaZgMrrM%2BRQRSINADGG4NgQ%3D%3D',
    pageNo: '1',
    numOfRows: '1000',
    dataType: 'JSON',
    base_date: now,
    base_time: '0600',
    nx: '56',
    ny: '71',
}

url = `${url}${params.type[0]}?serviceKey=${params.key}&pageNo=${params.pageNo}&numOfRows=${params.numOfRows}&dataType=${params.dataType}&base_date=${params.base_date}&base_time=${params.base_time}&nx=${params.nx}&ny=${params.ny}`;
console.log(url);

async function getPosts() {
    const res = await fetch(`${url}`);
    const data = await res.json();
    return data;
}

async function setPosts() {
    const posts = await getPosts();
    const datas = posts.response.body.items.item;
    const castEl = document.createElement('table');
    castEl.classList.add('table');
    const tr = document.createElement('tr');
    console.log(datas);
    let cast = {
        baseDate: datas[0].baseDate,
        rain: datas[0].obsrValue,
        rainInfo: function(){
            let info = this.rain;
            console.log(info);
            if (info == 0) {
                statusText = "맑음";
                rainIcon = rainIcon[0];
            } else {
                if (info == 1) {
                    statusText = "비옴";
                    rainIcon = rainIcon[1];
                } else if (info == 2) {
                    statusText = "비/눈";
                    rainIcon = rainIcon[2];
                } else if (info == 3) {
                    statusText = "눈옴";
                    rainIcon = rainIcon[3];
                }
            }
        },
        temperature: datas[3].obsrValue,
        wind: datas[7].obsrValue,
        nx: datas[0].nx,
        ny: datas[0].ny,
        loc: function () {
            let point = [this.nx, this.ny];
            console.log(point);
            if (point[0] == 56 && point[1] == 71) {
                locText = "나주시"
            }
        }
    }
    cast.loc();
    cast.rainInfo();
    console.log(3213214);
    document.querySelector('#castContents').innerHTML = `
        ${cast.baseDate} ${locText} ${cast.temperature}도 ${rainIcon}
    `;
    // <td>강수형태: ${statusText}</td>
    // <td>기온: ${cast.temperature}도</td>
    // <td>바람: ${cast.wind}ms</td>
}
setPosts();