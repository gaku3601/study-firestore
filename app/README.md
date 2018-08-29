# firestore設定方法
1.firebaesでpj作成する。  
2.Authenticationにある「ウェブ設定」ボタンを押下し、config情報を取得する。  
3.本リポジトリのsrc/firebase/config.jsを上記で取得したconfig情報で設定する。  
4.firestoreを作成するときは「テストで作成」を選択して作る。  
5.Authenticationタブでログイン方法「匿名」を許可しておく。  

# 現状、本リポジトリでできること
npm run devで起動させて画面をブラウザで表示されると、指定のfirestoreへ情報を書き込む。  

