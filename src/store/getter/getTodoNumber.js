export default (todos, status) => {
   // 获取各状态数量
   let ADD_TODO = [],
      RUN_TODO = [],
      OK_TODO = []

   for (let i = 0; i < todos.length; i++) {
      switch (todos[i].status) {
         case 0:
            ADD_TODO.push(todos[i])
            break
         case 1:
            RUN_TODO.push(todos[i])
            break
         case 2:
            OK_TODO.push(todos[i])
            break

         default:
            break
      }
   }

   let getValue = {
      ALL_TODO: [...todos ],
      ADD_TODO,
      RUN_TODO,
      OK_TODO
   }

   if(status === 'getNumber') {
      // 只获取数量
      getValue = {
         ALL_TODO: todos.length,
         ADD_TODO: ADD_TODO.length,
         RUN_TODO: RUN_TODO.length,
         OK_TODO: OK_TODO.length
      }
   }

   return getValue
}