module.exports = {
    images:{
        domains:['fakestoreapi.com']
    },
    webpack5: false,
    webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
        // Important: return the modified config
        return config
    },
}
