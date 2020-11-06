// // 记录标签list，标签包括 id 和 name
// import createId from '@/lib/createId';
//
// const localStorageKeyName = 'tagList';
//
// const tagListModel: TagListModel = {
//   data: [],
//   // 建议在组件生命周期created时调用，拿到数据
//   fetch() {
//     this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
//     return this.data;
//   },
//   create(name) {
//     // this.data = [{id:'1', name:'1'},{id:'2', name:'2'} ]
//
//     const names = this.data.map(item => item.name);
//     if (names.indexOf(name) >= 0) {
//       return 'duplicated';
//     } else {
//       const id = createId().toString();
//       this.data.push({id, name: name});
//       this.save();
//       return 'success';
//     }
//   },
//   // 通过id找到该标签，并根据name修改标签名
//   update(id, name) {
//     const idList = this.data.map(item => item.id);
//     if (idList.indexOf(id) >= 0) {
//       const names = this.data.map(item => item.name);
//       if (names.indexOf(name) >= 0) {
//         return 'duplicated';
//       } else {
//         const tag = this.data.filter(item => item.id === id)[0];
//         tag.name = name;
//         this.save();
//         return 'success';
//       }
//     } else {
//       return 'not found';
//     }
//   },
//
//   // 通过标签的id，数据库删除标签
//   remove(id) {
//     let index = -1;
//     for (let i = 0; i < this.data.length; i++) {
//       if (this.data[i].id === id) {
//         index = i;
//         break;
//       }
//     }
//     this.data.splice(index, 1);
//     this.save();
//     return true;
//   },
//
//   // 将整个tagList存入localStorage
//   save() {
//     window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
//   }
//
// };
//
// export default tagListModel;