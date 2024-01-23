// 定期的（今回は100ミリ秒間で）に桜を降らせるよう、setInterver関数を使用します
setInterval(() => {
    // 桜を作成します（span要素を作成し、それのクラスにsakuraをあてています）
    const sakura = document.createElement('span');
    sakura.classList.add('sakura');

    // sakuraのスタイル（サイズとページ上の左端からの位置）を指定
    sakura.style.width = sakura.style.height = Math.random() * 10 + 10 + 'px'; // これにより、幅、高さが、10～20でランダムに指定できます
    sakura.style.left = Math.random() * 100 + '%'; // 雪がページの左端からのどのくらいの距離で位置するようにするかえをランダムで指定

    // sakura-containerにsakuraを子要素として入れてやる
    // document.querySelector()するとき、クラスでやるときは、クラス名の前にピリオドが必要です。注意。
    document.querySelector('.sakura-container').appendChild(sakura);

    // アニメーションの時間が10秒なので、その時間がたったら削除されるようにします
    setTimeout(() => {
        // sakuraを削除します
        sakura.remove();
    }, 10000 /*ミリ秒指定なので、これで10秒です */);
}, 500 /* 何秒ごとにやるか指定してます*/);
