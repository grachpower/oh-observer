import * as express from 'express';
import { matchUserAgent } from "../helpers/checkUserAgent";

const ogPagesRouter = express.Router();

const seshImages = {
  'boxing': 'images/boxing.png',
  'yoga': 'images/yoga.png',
  'bootcamp': 'images/bootcamp.png',
  'other': 'images/other.png',
};

function getImageByType(type: string): string {
    return seshImages[type];
}

ogPagesRouter.use('/:seshType', (req, res, next) => {
    const isSocial = matchUserAgent(req).isSocial || false;
    const seshType = req.params.seshType;

    if (isSocial) {
        res.render('og-pages', {
            title: 'Seshme',
            ogUrl: 'http://www.seshmefitness.com.au/',
            ogTitle: 'Find a sesh today',
            ogType: 'website',
            ogImage: getImageByType(seshType),
            ogDescription: 'SeshMe connects you with fitness professionals and other fitness enthusiasts to find and book your perfect outdoor fitness session. Download the app today and build your very own fitness community.',
        });
    } else {
        next();
    }
});

ogPagesRouter.get('/:seshType', (req, res) => {
    // res.redirect('http://www.seshmefitness.com.au/');

    const seshType = req.params.seshType;

    res.render('og-pages', {
        title: 'Seshme',
        ogUrl: 'http://www.seshmefitness.com.au/',
        ogTitle: 'Find a sesh today',
        ogType: 'website',
        ogImage: `${getImageByType(seshType)}`,
        ogDescription: 'SeshMe connects you with fitness professionals and other fitness enthusiasts to find and book your perfect outdoor fitness session. Download the app today and build your very own fitness community.',
    });
});

export default ogPagesRouter;