const HoroscopeZodiac = require('../Models/horoscopeZodiac');

exports.getZodiacHoroscope = async(req, res) => {
    try {

        const horoscopes = await HoroscopeZodiac.findOne().sort({ enddate: -1 });
        res.status(200).json(horoscopes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching zodiac horoscope', error });
    }
};
///insert
exports.createZodiacHoroscope = async(req, res) => {
    const {
        startdate,
        enddate,
        CAPRICORNUS,
        AQUARIUS,
        PISCES,
        ARIES,
        TAURUS,
        GEMINI,
        CANCER,
        LEO,
        VIRGO,
        LIBRA,
        SCORPIO,
        SAGITARIUS
    } = req.body;

    try {

        const newHoroscope = new HoroscopeZodiac({
            startdate,
            enddate,
            CAPRICORNUS,
            AQUARIUS,
            PISCES,
            ARIES,
            TAURUS,
            GEMINI,
            CANCER,
            LEO,
            VIRGO,
            LIBRA,
            SCORPIO,
            SAGITARIUS
        });

        const savedHoroscope = await newHoroscope.save();

        res.status(201).json(savedHoroscope);
    } catch (error) {

        res.status(500).json({ message: 'Error creating new horoscope', error });
    }
};


exports.updateZodiacHoroscope = async(req, res) => {
    const { id } = req.params;
    const {
        startdate,
        enddate,
        CAPRICORNUS,
        AQUARIUS,
        PISCES,
        ARIES,
        TAURUS,
        GEMINI,
        CANCER,
        LEO,
        VIRGO,
        LIBRA,
        SCORPIO,
        SAGITARIUS
    } = req.body;

    try {

        const updatedHoroscope = await HoroscopeZodiac.findByIdAndUpdate(
            id, {
                startdate,
                enddate,
                CAPRICORNUS,
                AQUARIUS,
                PISCES,
                ARIES,
                TAURUS,
                GEMINI,
                CANCER,
                LEO,
                VIRGO,
                LIBRA,
                SCORPIO,
                SAGITARIUS
            }, { new: true }
        );

        if (!updatedHoroscope) {
            return res.status(404).json({ message: 'Zodiac sign not found' });
        }

        res.json(updatedHoroscope);
    } catch (error) {
        res.status(500).json({ message: 'Error updating oracle data', error });
    }
};