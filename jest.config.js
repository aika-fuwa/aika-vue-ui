module.exports = {
    "moduleFileExtensions": [
        "js",
        "ts",
        "json",
        "vue"
    ],
    "transform": {
        ".*\\.(vue)$": "vue-jest",
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.js?$": "babel-jest"
    },
    "testURL": "http://localhost/",
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    "snapshotSerializers": ["jest-serializer-vue"]
}
// "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
