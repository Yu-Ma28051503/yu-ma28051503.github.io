// JSONファイルを取得して最近の活動テーブルに表示

// GETメゾットでjsonファイルを取得する
// XMLHttpRequest版
// function getJson()
// {
//     const url = "../json/activities.json";  // jsonファイルへのパス
//     let req = new XMLHttpRequest();

//     req.open('GET', url);
//     req.responseType = "json";  // JSONとして受け取り自動的にパースされる
//     req.send();  // リクエストを送る

//     // jsonファイルの読み込み
//     req.onload = () => {
//         // 全てのjsonファイルが読み込めたとき
//         if(req.readyState == 4 && req.status == 200) {
//             let containts = "";  // 表示するコンテンツを入れる変数
//             let json = req.response;  // レスポンスを受け取る
//             let jsonl = json.length-1;  // jsonに入っている個数

//             for(let i = jsonl; i >= jsonl-4; i--) {
//                 if(json[i].url === null) {
//                     containts += '<tr><td>' + json[i].date + "</td><td>" + json[i].containts + "</td></tr>"
//                 } else {
//                     containts += '<tr><td>' + json[i].date + '</td><td><a href="' + json[i].url + '"target="_blank">' + json[i].containts + "</a></td></tr>";
//                 }
//                 if(i == 0) break;
//             }

//             // 表示
//             document.getElementById("activities-containts").innerHTML= containts;
//         } else {
//             console.log("cannot read json");
//         }
//     };
// }

// fetch版(こっちの方が新しいらしい)
async function getjson()
{
    const url = "./js/activities.json";  // jsonファイルへのパス
    let req = await fetch(url);  // リクエストを送信
    if(req.ok) {  // HTTP status 200-299の場合
        let containts = "";  // 表示させるコンテンツを入れる変数
        let json = await req.json();
        let jsonl = json.length-1;  // jsonに入っている個数

        for(let i = jsonl; i >= jsonl-4; i--) {
            if(json[i].url === null) {
                containts += '<tr><td>' + json[i].date + "</td><td>" + json[i].containts + "</td></tr>"
            } else {
                containts += '<tr><td>' + json[i].date + '</td><td><a href="' + json[i].url + '"target="_blank">' + json[i].containts + "</a></td></tr>";
            }
            if(i == 0) break;
        }

        // 表示
        document.getElementById("activities-containts").innerHTML = containts;
    }
}

getjson();
// getJson();