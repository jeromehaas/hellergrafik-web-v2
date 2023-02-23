import { gql } from '@apollo/client';

export const GET_SHOWCASE = () => {
    return gql`
    query {
        showcase {
            data {
                id,
                attributes {
                    projects {
                            data {
                                id
                                attributes {
                                    article {
                                        id
                                        heading
                                    }
                                    teaser {
                                        data {
                                            attributes {
                                                formats
                                                url
                                            }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }`
};

export const  GET_HERO = () => {
    return gql`
    query {
        hero {
            data {
                id
                attributes {
                    image {
                        data {
                            attributes {
                                formats
                            }
                        }
                    }
                }
            }
        }
    }`
};

export const GET_INTRO = () => {
    return gql`
    query {
        intro {
            data {
                id
                attributes {
                    heading
                    subheading
                    button {
                        label
                        href
                    }
                }
            }
        }
    }`
};

export const GET_PORTFOLIO = () => {
    return gql`
    query {
        portfolio {
            data {
                id,
                attributes {
                    projects {
                            data {
                                id
                                attributes {
                                    article {
                                        id
                                        heading
                                    }
                                    teaser {
                                        data {
                                            attributes {
                                                formats
                                                url
                                            }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }`
};

export const GET_PROJECTDETAIL = (id) => {
    return gql`
        query {
        project(id: ${ id }) {
            data {
            id
            attributes {
                article {
                id
                heading
                text
                details {
                    id
                    title
                    content
                }
                images {
										id
                    image {
                    data {
                        id
                        attributes {
                        formats
                        url
                        }
                    }
                    }
                }
                }
                teaser {
                data {
										id
                    attributes {
                    formats
                    url
                    }
                }
                }
                logo {
                data {
										id
                    attributes {
                    formats
                    url
                    }
                }
                }
            }
            }
        }
        }
    `
}