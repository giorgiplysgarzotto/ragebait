import { type RouteConfig, index, route} from "@react-router/dev/routes"

export default [index("routes/home/game/Game.tsx"), 
                route("bracket", "routes/home/game/bracket.tsx"), 
                route("round", "routes/home/game/round.tsx"),
            ] satisfies RouteConfig;
