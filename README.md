# React.PureComponent

這專案是用來測試`React.PureComponent`實際的更新狀況，特別針對`Component.prop.children`不為`Pure`的情況下測試
也針對[官方](https://reactjs.org/docs/react-api.html#reactpurecomponent)提到的*Note*做測試

>React.PureComponent’s shouldComponentUpdate() skips prop updates for the whole component subtree. Make sure all the children components are also “pure”

主要檔案是[App.js](https://github.com/sovmedcare/react-purecomponent-test/blob/master/src/App.js)和[Children.js](https://github.com/sovmedcare/react-purecomponent-test/blob/master/src/Children.js)，可以**Clone**下來或是在[這裡](https://sovmedcare.github.io/react-purecomponent-test/)直接試試看

# 結論

1. 當`extends React.PureComponent`又再使用`shouldComponentUpdate`時，**console.log**會報錯

2. 當傳給`Children Component`的**props**「是」一樣的reference，更新`Children Component`會觸發children的**ComponentDidUpdate** & **render**，但畫面上不會有任何改變，真的被**skip**掉了，*ex. `value={this.value}`*

3. 當傳給`Children Component`的**props**「不是」一樣的reference，更新`Children Component`會影響畫面上的結果，一樣有觸發**ComponentDidUpdate** & **render**；更新`Parent Component`會觸發`Children Component`的**update** & **render** *(pure的時候沒有)*，*ex. `value={{x: 1, y: 2}}`*