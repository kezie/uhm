import Assocition from '../../../images/insurance/association.jpg'
import Individuals from '../../../images/insurance/individual.jpg'
import Families from '../../../images/insurance/family.jpg'
import Corporate from '../../../images/insurance/corporate.jpg'

export const InsuranceData = [
    
    {
        image: Individuals,
        type: 'Individuals',
        desc: 'At Ultimate Health HMO we offer health plans that fits you. Our Health plans are designed and suitable for all Individuals.',
        icon: 'flaticon-user',
        link: '/individual-plan'
    },
    {
        image: Families,
        type: 'Families',
        desc: 'Are you looking to get a health insurance plan for your family? At Ultimate Health HMO we offer health plans that fits your family.',
        icon: 'flaticon-customers',
        link: '/family-plan'
    },
    {
        image: Corporate,
        type: 'Corporate',
        desc: 'At Ultimate Health HMO we offer health plans that fits you. Our Health plans are designed and suitable for all sizes of Corporate Organizations.',
        icon: 'flaticon-insurance',
        link: '/corperate-plan'
    },
    {
        image: Assocition,
        type: 'Associations',
        desc: 'At Ultimate Health HMO we offer health plans that fits you. Our Health plans are designed and suitable for all sizes of Corporate Organizations.',
        icon: 'flaticon-insurance',
        link: '/association-plan'
        
    },
]