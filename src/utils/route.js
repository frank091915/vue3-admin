const path = require('path')

/**
 * 获取子路由配置
 * @param {*} routes
 * @returns
 */
function getChildrenRoutes(routes) {
  const result = []
  routes.forEach((item) => {
    if (item.children && item.children.length) {
      result.push(...item.children)
    }
  })
  return result
}

/**
 * 通过查重，处理脱离层级的路由
 */
export function filterRoutes(routes) {
  const childrenRoutes = getChildrenRoutes(routes)
  routes = routes.filter((item) => {
    return !childrenRoutes.find((singleRoute) => {
      return singleRoute.path === item.path
    })
  })
  return routes
}

function isNull(val) {
  if (!val) return true
  if (JSON.stringify(val) === '{}' || JSON.stringify(val) === '[]') return true
  return false
}

export function generateMenu(routes, basePath = '') {
  const result = []
  routes.forEach((item) => {
    // 不存在meta的情况：
    // 不存在meta且不存在children时，直接return
    // 不存在meta，存在children,比如路径为'/'的对象，不渲染但是有children
    // 存在meta的情况
    // 存在meta，不存在children，直接加入菜单数组中
    // 存在meta，存在children
    if (isNull(item.meta) && isNull(item.children)) return
    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...generateMenu(item.children))
      return
    }

    // 导航菜单可以跳转，path需要合并,子路由可以不包括父路由的路径
    const routePath = path.resolve(basePath, item.path)

    // 判断当前路由是否已经添加
    let currentMenu = result.find((menu) => {
      return routePath === menu.path
    })
    // 如果没有添加,创建菜单数据对象
    if (!currentMenu) {
      currentMenu = {
        ...item,
        path: routePath,
        children: []
      }

      // 存在tile和icon的路由才会显示到菜单中
      if (currentMenu.meta.title && currentMenu.meta.icon) {
        result.push(currentMenu)
      }

      // 如果有children,解析children路由
      if (!isNull(item.children)) {
        currentMenu.children = generateMenu(item.children, routePath)
      }
    }
  })

  return result
}

// /**
//  * 判断数据是否为空值
//  */
//  function isNull (data) {
//     if (!data) return true
//     if (JSON.stringify(data) === '{}') return true
//     if (JSON.stringify(data) === '[]') return true
//     return false
//   }
//   /**
//    * 根据 routes（filterRoutes） 数据，返回对应 menu 规则数组
//    */
//   export function generateMenus (routes, basePath = '') {
//     const result = []
//     // 遍历路由表
//     // 不满足该条件meta && meta.title && meta.icon 的数据不应该存在
//     routes.forEach((item) => {
//       // 不存在 children && 不存在 meta 直接 return
//       if (isNull(item.meta) && isNull(item.children)) return
//       // 存在 children 不存在 meta，进入迭代
//       if (isNull(item.meta) && !isNull(item.children)) {
//         result.push(...generateMenus(item.children))
//         return
//       }
//       // 合并 path 作为跳转路径
//       // 不存在children 存在meta
//       // 因为最终的 menu 需要进行 跳转，此时我们需要合并 path
//       const routePath = path.resolve(basePath, item.path)
//       // 路由分离之后，存在同名父路由的情况，需要单独处理
//       let route = result.find((item) => item.path === routePath)
//       // 当前 路由尚未加入到result
//       if (!route) {
//         route = {
//           ...item,
//           path: routePath,
//           children: []
//         }

//         // icon 与 title 必须全部存在
//         if (route.meta.icon && route.meta.title) {
//           // meta 存在生成 route 对象，放入 arr
//           result.push(route)
//         }
//       }

//       // 存在 children 进入迭代到children
//       if (item.children) {
//         route.children.push(...generateMenus(item.children, route.path))
//       }
//     })
//     return result
//   }
