// 定期的（今回は100ミリ秒間で）に雪を降らせるよう、setInterver関数を使用します
setInterval(() => {
    // 雪を作成します（span要素を作成し、それのクラスにsnowをあてています）
    const snow = document.createElement('span');
    snow.classList.add('snow');

    // snowのスタイル（サイズとページ上の左端からの位置）を指定
    snow.style.width = snow.style.height = Math.random() * 8 + 'px'; // これにより、幅、高さが、～８（正確には８は含まれない）でランダムに指定できます
    snow.style.left = Math.random() * 100 + '%'; // 雪がページの左端からのどのくらいの距離で位置するようにするかえをランダムで指定

    // snow-containerにsnowを子要素として入れてやる
    // document.querySelector()するとき、クラスでやるときは、クラス名の前にピリオドが必要です。注意。
    document.querySelector('.snow-container').appendChild(snow);

    // アニメーションの時間が10秒なので、その時間がたったら削除されるようにします

    setTimeout(() => {
        // snowを削除します
        snow.remove();
    }, 10000 /*ミリ秒指定なので、これで10秒です */);
}, 100 /* 何秒ごとにやるか指定してます*/);
