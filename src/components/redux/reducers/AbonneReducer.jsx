import {
  ABONNE,
  GET_ABONNES,
  ADD_CART,
  GET_CART,
  DESABONNE,
  DELETE_CART,
  GET_TROC,
  GET_VENTE,
  DELETE_VENTE,
  CREATE_PME,
  DELETE_PME,
  UPDATE_PME,
  GET_TROCS,
  GET_OBJET_TROCS,
  DELETE_TROC,
  CREATE_TROC,
  UPDATE_TROC,
} from "../actions/AbonneAction";

const initialState = {
  abonnes: [],
  cart: [],
  trocsObject: [],
  ventes: [],
  trocs: [],
};

export default function AbonneReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ABONNES:
      return {
        ...state,
        abonnes: action?.payload,
      };

    case CREATE_PME:
      return {
        ...state,
        abonnes: [...state.abonnes, action.payload],
      };
    case CREATE_TROC:
      return {
        ...state,
        trocsObject: [...state.trocsObject, action.payload],
      };

    case DELETE_PME:
      return {
        ...state,
        abonnes: state?.abonnes?.users?.filter(
          (pro) => pro._id !== action.payload
        ),
      };
    case DELETE_TROC:
      return {
        ...state,
        trocsObject: state?.trocsObject?.filter(
          (pro) => pro._id !== action.payload
        ),
      };

    case UPDATE_PME:
      return {
        ...state,
        abonnes: state.abonnes?.users?.map((pro) => {
          if (pro._id !== action.payload.id) {
            return pro;
          }
          return {
            ...pro,
            pseudo: action?.payload?.abonne?.pseudo,
            ref: action?.payload?.abonne?.ref,
            email: action?.payload?.abonne?.email,
            password: action?.payload?.abonne?.password,
            quartier: action?.payload?.abonne?.quartier,
            commune: action?.payload?.abonne?.commune,
            tel: action?.payload?.abonne?.tel,
            open: action?.payload?.abonne?.open,
            heur_debut_h: action?.payload?.abonne?.heur_debut_h,
            heur_debut_m: action?.payload?.abonne?.heur_debut_m,
            heur_fin_h: action?.payload?.abonne?.heur_fin_h,
            heur_fin_m: action?.payload?.abonne?.heur_fin_m,
            images: action?.payload?.abonne?.images,
          };
        }),
      };

    case UPDATE_TROC:
      return {
        ...state,
        trocsObject: state.trocsObject?.map((pro) => {
          if (pro._id !== action.payload.id) {
            return pro;
          }
          return {
            ...pro,
            desc: action?.payload?.troc?.desc,
            weight: action?.payload?.troc?.weight,
            images: action?.payload?.troc?.images,
          };
        }),
      };

    case GET_TROCS:
      return {
        ...state,
        trocs: action?.payload,
      };

    case GET_OBJET_TROCS:
      return {
        ...state,
        trocsObject: action?.payload,
      };

    case GET_VENTE:
      return {
        ...state,
        ventes: action?.payload,
      };

    case GET_CART: {
      return {
        ...state,
        cart: action?.payload,
      };
    }

    case ABONNE: {
      return {
        ...state,
        abonnes: state?.abonnes?.users?.map((post) => {
          if (post._id === action.payload.postId) {
            return {
              ...post,
              abonnes: [action.payload.userId, ...post.abonnes],
            };
          }
          return post;
        }),
      };
    }

    case DESABONNE: {
      return {
        ...state,
        abonnes: state?.abonnes?.users?.map((post) => {
          if (post._id === action.payload.postId) {
            return {
              ...post,
              abonnes: post?.abonnes?.filter(
                (id) => id !== action.payload.userId
              ),
            };
          }
          return post;
        }),
      };
    }

    case DELETE_VENTE: {
      return {
        ...state,
        ventes: state?.ventes?.map((post) => {
          if (post.id === action.payload.postId) {
            return {
              ...post,
              ventes: post?.ventes?.filter(
                (id) => id !== action.payload.userId
              ),
            };
          }
          return post;
        }),
      };
    }

    case ADD_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }

    case DELETE_CART: {
      return {
        ...state,
        cart: state.cart.filter((id) => id.id !== action.payload.id),
      };
    }

    default:
      return state;
  }
}
