// 创建字典的构造函数
function Dictionary() {
    // 字典属性
    this.items = {}

    // 字典操作方法
    //1.在字典中添加键值对
    Dictionary.prototype.set = function (key, value) {
        this.items[key] = value
    }

    //2.判断字典中是否有某个key
    Dictionary.prototype.has = function (key) {
        return this.items.hasOwnProperty(key)
    }

    //3.从字典中移除元素
    Dictionary.prototype.remove = function (key) {
        //3.1 判断字典中是否有这个key
        if (!this.has(key)) return false
        //3.2 从字典中删除key
        delete this.items[key]
        return true
    }

    //4.根据key去获取value
    Dictionary.prototype.get = function (key) {
        return this.has(key) ? this.items[key] : undefined
    }

    //5.获取所有的keys
    Dictionary.prototype.keys = function () {
        return Object.keys(this.items)
    }

    //6.获取所有的value
    Dictionary.prototype.values = function () {
        return Object.values(this.items)
    }

    //7.size方法
    Dictionary.prototype.size = function () {
        return this.keys().length
    }

    //8.clear方法
    Dictionary.prototype.clear = function () {
        this.items = {}
    }
}

// // 创建字典对象
// var dict = new Dictionay()

// // 在字典中添加元素
// dict.set("age", 18)
// dict.set("name", "pudding")
// dict.set("height", 1.67)
// dict.set("address", "上海市")

// // 获取字典的信息
// alert(dict.keys())
// alert(dict.values())
// alert(dict.size())
// alert(dict.get("name")) 

// // 字典的删除方法
// dict.remove("height")
// alert(dict.keys())

// // 清空字典
// dict.clear()