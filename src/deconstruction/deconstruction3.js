//解构参数
{
    function setCookie (name, value, options) {
        options = options || {};
    }

    function setCookie (name, value, { secure, path, domain, expires }) {

    }
}

//必须传值的解构参数
{
    function setCookie (name, value, { secure, path, domain, expires } = {}) {

    }
}

//解构参数的默认值
{
    //为解构参数指定默认值
    function setCookie (name, value, {
        secure = false,
        path = '/',
        domain = 'example.com',
        expires = new Date(Date.now() + 100000000)
    }) { }

    //为解构指定默认参数
    function setCookie (name, value,
        {
            secure = false,
            path = '/',
            domain = 'example.com',
            expires = new Date(Date.now() + 100000000)
        } = {
                secure: false,
                path: '/',
                domain: 'example.com',
                expires: new Date(Date.now() + 100000000)
            }
    ) { }
}