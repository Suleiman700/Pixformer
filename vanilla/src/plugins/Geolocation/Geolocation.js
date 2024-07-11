
class Geolocation {
    constructor() {}

    async getGeolocation() {
        const res = {
            // Store flag
            geolocationAvailable: false,

            // Store geolocation data
            geolocationData: {
                latitude: undefined,
                longitude: undefined,
                accuracy: undefined,
            },

            // Store error
            geolocationError: {
                code: undefined,
                message: undefined
            }
        }

        try {
            console.log("Before Get Location");

            // const data = await this.getAwait()
            const data = []
            console.log("After Get Location");

            // Update flag
            res['geolocationAvailable'] = true

            // Store geolocation info
            for (let geolocationDataKey in res['geolocationData']) {
                res['geolocationData'][geolocationDataKey] = data['coords'][geolocationDataKey]
            }
        }
        catch (e) {
            console.log("in catch Location");
            // Store geolocation error
            for (let geolocationErrorKey in res['geolocationError']) {
                res['geolocationError'][geolocationErrorKey] = e[geolocationErrorKey]
            }
        }

        return res
    }

    async getAwait() {
        return new Promise((resolve, reject) => {
            let test = navigator.geolocation.getCurrentPosition(resolve, reject)
            console.log(test);
            return test;
        }
            
        );
    }
}

export default new Geolocation()