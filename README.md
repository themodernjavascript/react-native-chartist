
# react-native-chartist

## Getting started

`$ npm install react-native-chartist --save`

### Mostly automatic installation

`$ react-native link react-native-chartist`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-chartist` and add `RNChartist.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNChartist.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNChartistPackage;` to the imports at the top of the file
  - Add `new RNChartistPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-chartist'
  	project(':react-native-chartist').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-chartist/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-chartist')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNChartist.sln` in `node_modules/react-native-chartist/windows/RNChartist.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Chartist.RNChartist;` to the usings at the top of the file
  - Add `new RNChartistPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNChartist from 'react-native-chartist';

// TODO: What to do with the module?
RNChartist;
```
  