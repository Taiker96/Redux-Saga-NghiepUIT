//Cái này dạng như tự đặt ra rule ngồi fix lỗi lặt vặt
//Khi chúng ta cài create-react-app thì nó đã có sẵn thư viện eslint rồi
//Đầu tiên cài npm install eslint-plugin-react --save-dev chỉ cần cài này npm
//Cài đặt extensions: Prettier (Video 118 hướng dẫn)
//Giải thích eslint giúp phát hiện lỗi còn Prettier dùng để format lỗi đó
//Sau đó cài prettier
//Cài npm install --save-dev eslint-config-prettier
//Cài npm install --save-dev eslint-plugin-prettier
//Cài npm install --save-dev --save-exact prettier
//Cách format nhấn chuột phải vào file muốn format nhấn Format Doccument

//Sau đó chỉnh thêm trong pakage.json chạy các lệnh đã bổ sung trong đó như sau
//npm run format
//npm run linting //Check lỗi

//npm install husky --save-dev
//Thằng này yêu cầu phải check eslint và prettier nếu chưa check lỗi thì ko đc commit file lên (Làm Team)
//npm install lint-staged --save-dev

//Cài đặt extensions: EditorConfig for VS Code (Video 120 hướng dẫn)

//Nhớ tải rồi chạy nhé
//npm install -g json-server // tải
//json-server db.json //chạy

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb', //npm install --save-dev eslint-config-airbnb
    'prettier',
  ],
  rules: {
    semi: 1, //1 là hiện warning
    //quotes: [2, 'single'], //2 là báo lỗi và (single) phải viết trong dấu nháy đơn
    'react/prop-types': 1,
    'react/jsx-max-props-per-line': 1,
    'linebreak-style': 0, //0 là tắt nó ko cho báo lỗi
    'import/no-extraneous-dependencies': 0,
    'class-methods-use-this': 0,
    'react/jsx-filename-extension': 0, //Rule này bắt đặt đuôi là .jsx
    'react/jsx-closing-expression-per-line': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'no-unused-vars': 1,
    'import/extensions': 0,
    'import/order': 1,
    'react/prefer-stateless-function': 0,
    'no-use-before-define': 0,
    'no-param-reassign': 0,
    'import/no-useless-path-segments': 0,
    'import/prefer-default-export': 0,
    'react/jsx-users-vars': 2,
    'spaced-comment': 0, //Tha hồ mà chú thích //
    'react/jsx-closing-bracket-location': 0,
    'prettier/prettier': ['error', {
      endOfLine: 'auto'
    }]
  },
  plugins: ['prettier'],
  env:{
    "es6": true,
    "browser": true,
    "node": true
  },
};
