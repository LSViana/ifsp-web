<template>
    <div id="root" >
        <div id="background">fundo</div>

        <v-container mt-4>
            <v-layout justify-center="">
                <v-flex xs12 sm10  >
                    <v-card >
                        <v-container>
                            <v-layout justify-space-between="" row wrap>
                                <v-flex xs12 sm6 >
                                    <!-- <img
                                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw4NEA4NDQ8QDg0NEBEPEQ8QDw8RDg4OFREWFhkRExMYHSggGSYlIBMTITMhJSkrOi4wGR8zODMtNygtLisBCgoKDg0OGhAQGy0dHx0uKy0tKy0tLS0rKy0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLTctLSstLSstLSstN//AABEIAJoBSAMBEQACEQEDEQH/xAAcAAEAAwEBAQEBAAAAAAAAAAAAAQQFBgMHAgj/xAA+EAACAQIDAQsICQUBAAAAAAAAAQIDEQQFBhIhMTM0QVFTcnORshMVFmGCkrHRByIjVHGBosHCFDJCUqEk/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAMEBQIBBgf/xAAsEQEAAQIDBwUAAgMBAAAAAAAAAQIDBAUREhMhMTIzURQVQVJxImEGI4Gh/9oADAMBAAIRAxEAPwD7gAAAAAAAAAAAAACtmOPpYWlOvXmqdKmryk/gud+o8mdElq1VdqiiiNZl8f1L9JGLxMpQwbeFobyat5ea53L/AB/Bd5XqvTPJ9hgsitW42r38p/8AHIVMfiJu869aTfLKrUbf5tkM1TLZpw1mmNIpiP8Ai9lepsfhJKVDE1Ul/hOTqU36nCV13WOqblUK9/LcNejSqmP2OD61ofXFPM/sKqVHGRV9hP6lVLflB/tyFmi5FT5DMsqrws7VPGmfnx+tLPs3qUZqlSsnZSlJq+/yIzsdjKrVWxQwrtyaZ0hk+fMV0n6YfIoevv8AlDvqzz5iuk/TD5D19/yb2s8+YrpP0w+Q9ff8m+qaeRZxUq1PJVbS2k3GVkndbtnYu4LG13K9itLauzVOkvPOc7qwqSpUmoqG43ZNydvWcYvHV01zRR8PLl2YnSFDz5iuk/TD5FX197y431R58xXSfph8h6+95N9UefMV0n6YfIevveTe1NrT+azruVOpZyitpSStdXtuo0sDi6rutNXNNauTVwltGkmSAAAAAAAAAAAAAABAAAAAAAAAAAAAAPjv0uZ7KtiVgYS+xwqUppb068lfd6qa95la9Vx0fYf4/g4ptzfqjjPL8cAQPowAB64TEzo1IVqUnCpSkpwkuSSPYnSdUd61TdomiqOEvrlfMljVRxUdxVqNOTX+srNSj+TTRlY+rW7q/K8wszZv1W5+HkUlIAAaOneM0/a8LLuA78JbPU8c44xW67+BHi+9U8udUqhWRgADa0nw0+z/AJI08r7k/ixY5urN5aSAAAAAAAAAAAAAABAAAAAAAAAAAAAAP511dJyx+Oct/wDqaq/JSsv+JFK51S/RctiIwlvTwyDheAAAD6Do6TeDp33lKoo9Xbb+LZk4zuPzn/I4iMbOniG2VGAAANHTvGKfteFl3Ad+Etnrh45xxit12R4zvVPLnVKoVkYAA2tJ8NPs/wCSNPK+5P4sWObqzeWkgAAAAAAAAAAAAAAQAAAAAAAAAAAAAD4d9KWUyw2PnWt9ljEqsXybaSU496T9oqXqdKtX3GRYmLmH2Pmng48ibYAAmMXJqMU5Sk0klvuT3EkHlVUUxtTyh9Zo5Y8FSw+Gf99OjBz7SV5S/wCtmXj40u6PyzNL+/xNVfnk/RSZwAA0dPcZp+14WXcB34S2et45xxit12R4vvVPLnVKoVkYAA2tJ8NPs/5I08r7k/ixY5y6s3lpIAAAAAAAAAAAAAAEAAAAAAAAAAAAAAyNT5BRzOhLD1tx/wB1Ool9alUtuSXy5TmqmKo0laweLrwtzbo/7Hl8N1DprF5dNxxFN+Tv9WvFN0Zrn2uT8GVKqJpfdYPMbOJp/jOk+GOcL70w1Cdaap0oSqVJb0IRcpP8kexEzyR3LtFuNqudIfVvo/0DLDTjjccl5aO7SobjVJ/7ze85cyW963vWbdvTjL5LNc430Tas9PzPl1meZNKvJVaTW1bZcXuXtvNMpY3BTdnap5vl7lra4wyvR7E80ffKHtt7+kO4qPR7E80feHtt7+jcVHo9ieaPvD269/RuamlkmSzoz8rVauk1GKd9/lbLuDwNVqrbrS2rWzOsvxm+RVKlR1aTi9vdcW7WfOjnF4Cquvbo+Xly1rOsKHo9ieaHvoq+23v6R7io9HsTzQ98e23v6NxUej2J5oe+Pbb39G4qbORZTLD7U6jTnJWst1Rje++aOCwc2daqucp7dvZ5tc0EqQAAAAAAAAAAAAAAIAAAAAAAAAAAAABh6lzCpS2KdN7Lmm3Jb9lyIzMxxFduIpp4aoL1c08Ic7LG1pJqVSbT305Np/kZHqbv2QRdridYll1Mqw0m5SoUm3y+Tic7+55W6czxdMaRcldwb/p1s0PslzU0oX7j2MRcj5V7mKvXOuqZa2UZrWVWEZTlOE5KLUne19y6ZbwmLuRciJnWJLdyddJW9R5lVhUVGnJwSim2txtv1k+YYqumvYpnR3euTE6Qx/OFfpanvyM71N37Sg26vJ5wr9LU9+Q9Td+0m3V5R/X1+lqe/Iepu/aTbq8tbT2Z1ZVVSqSc4zTttbri0r75fwGKrmvYqnXVNauTM6S6c21kAAAAACQAAAAAAAAAAAAAAIAAAAAAAAAAAAABy+ruEpdSXxRiZr1UquI5wwjJVwABYy7hqPaQ8SJ8N3af13R1Quam4xLqRLGY95Jf6mWUEAAA0dPcYp+14WXcB34TWep2h9IuAAAAAASAAAAAAAAAAAAAABAAAAAAAAAAAAAAOX1dwlLqS+KMTNOulVxHOGEZKuAALGXcNR7SHiRPhu7T+u6OqFzU3GJdWJYzHvJL/UyyggAAGjp7jNP2vCy7gO/CWz1O0PpF0AAAAEgAAAAAAAAAAAAAAAIAAAAAAAAAAAAABy+ruEpdSXxRiZp10quI5wwjJVwABYy7hqPaQ8SJ8N3af13R1Quam4xLqR/csZj3kl/qZZQQAADR09xmn7XhZdwHfhLZ6naH0i6AAAACQAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAzs3yuOJUd3ZnC9pWurPkZUxeFi/HiYR3Le3DI9GanSw7mZvtk/aEO4nyejNTpYdzHtk/aDcT5PRmp0sO5j2yr7QbifK3lmQeSmqlSans7sUluX52WMNl8UVbVU66O6LOzOr3zjJ1iGpxlsTSs7q6kvWTYvBxenaidJdXLcVMz0ZqdLDuZR9sn7Qi3E+U+jNTpYdzHtlX2g3E+T0ZqdLDuY9sq+0G4ny0MoyVYeXlJSU52srKyjflLuEwUWp2pnWUlu1s8WwX5nRMXG1AXG1Ai42o8iT0SAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAHP6qxU4+TpxbjGScpWdm7WVjJzO9VTpTE6aq9+qY4Q5vafO+8xturyraybT533sbVXk1k2nzvvY2qvJrK9k2LnTrU0pPZnJRlG+403beLWEv103YjXmkt1zFS5qfFz8r5JSahGKdk7Xb5yxmN6rebETwd3qp10Yu0+d95m7dXlBrJtPnfeNuryaybT533jbq8mstfTWLmqyp7TcJp7jbaTSvddxoZfer3mzM8JTWap10eWfYuc604OT2Kb2YxT3N7fI8derm7NOvCHl2udrRm7T533lPbq8otZNp87G1V5e7Um0+d9426vLzWXQaVxU3KdKTbio7Su72d7bnea2WXqpqmiZ4LNmqZ4S6U2VgAAAAAAAAAAAAAAAgAAAAAAAAAAAAAHMau4Sl1JfFGHmvVSrYj4YJlKwAAsZdw1HtIeJE+G7tP67o6oXNTcYl1IljMe87v9TLKCEAAaOnuM0/a8LLuA78JbPU8c44et12R4zvVfry51SqFZGAANvSfDT7P+SNPK+5P4s2ObqzeWQAAAAAAAAAAAAAACAAAAAAAAAAAAAAcxq7hKXUl8UYea9VKtiPhgmUrAACxl3DUe0h4kT4bu0/rujqhc1NxiXUiWMx7zu/1MsoIQABo6e4zT9rwsuYDvwls9TxzjjFbrs4xfeq/XlzqlUKyMAB629J8NPs/5I08r7k/iexzdWby0AAAAAAAAAAAAAAAQAAAAAAAAAAAAADmNXf30upL4ow816qVbEfDBMpWAAFjLuGo9pDxInw3dp/XdHVC7qbjD6kf3LGY95Jf6mUUEAAA0dO8Zp+14WXcBH++E1nqeOccYrdd/BEeM71X65udUqhWRgADb0nw0+z/kjTyvuSsWObqzeWgAAAAAAAAAAAAAACAAAAAAAAAAAAAAUs0wFOvG1R7Ozuqd0nHvK2JsUXaf5cNPlxXRFXNi+ZcN96j3w+Zm+hs/dDuqfJ5lw33qPfD5j0Nn7m6p8nmXDfeo98PmPQ2fubqnyvZVlNCnLykanlpR3t2Novnsi1hsHaoq2onV3RbpieEvfN8to1kp1JeTlHc27pbnM7kmKw1u7xqnR1coirmyvMuG+9R76fzKPobP3RbmnyeZcN96j30/mPQ2fubqnyeZcN96j3w+Y9DZ+5uqfLTyjLKNG9SnPysnubV00lzKxdwuFt2v5Uzqlt26aeRmWSU8RLbu4Te+1ZqX4oYjA0XqtrlLyu1FXFT9GIdLL3UV/aqfs49PHk9GIdLL3UPaqfsenjyejEOll7qHtVP2PTx5aeWZZTwyezdylvye+/UXcPhaLEcEtFEU8l4suwAAAAAAAAAAAAAACAAAAAAAAAAAAAAc3q2rK9Knf6rTk1zu6tcxs0rqiYp+Fe/PJzxjqoAAt5RVlCvScXa8lF+uLdrMs4SuabsaSktzpVC7qirJ1thv6sIppcl3e7LOZXKpu7Ph3fnjoxzNQB6B4NTTVWUa8Yp/VmpKS5HZXRfy6uYvRHxKazP8tHYn0S4AAAACQAAAAAAAAAAAAAAAEAAAAAAAAAAAAAA5jV3CUupL4ow8166VbEfDBMpWAAFjLuGo9pDxInw3dp/XdHVC5qbjEupD9yxmPed3+pllBCAANHT3GafteFl3Ad+EtnqdofSLoAAAAJAAAAAAAAAAAAAAAAQAAAAAAAAAAAAADmNXcJS6kvijDzXrpVcRzhgmUrgACxl3DUe0h4ifDd2n9d0dULupuMS6sf3LGY96Xd/qZRQQgADR09xin7XhZdwHehLZ6naH0i6AAAACQAAAAAAAAAAAAAAAEAAAAAAAAAAAAAA5jVy+vSfJsy+KMTNY/lSrYj4YJkqwAAs5ar1qNukj8SfDcbtP67t9ULmpl/6H64R/csZjH+5Jf6mUUEAAA0tOr/00/UpP9LLuAj/dCaz1OzPpFwAAAAEgAAAAAAAAAAAAAAAIAAAAAAAAAAAAABkaninQu0rqSs7bq/AzsyiN0hvdLkUYEqgADxsaWinWk2k7QbXqd1vGjlsRvU9jqXNWxWzSdlfaavy2tvXLOaRGkS7v/DmzEVgAB0OkYq9V2V/qq/LbmNjK4jis2HSGysAAAAAkAAAAAAAAAAAAAAAB/9k="
                                    > -->
                                    <v-img
                                        :src="`https://brasilescola.uol.com.br/upload/vestibular/-593abbd89ee9c.png`"
                                    ></v-img>
                                </v-flex>
                                <v-flex xs12 sm6 >
                                    <v-form>
                                        <h2 class="font-weight-bold display-1">Login</h2>
                                        <h3 class="caption font-weight-thin">Acesso para servidores ou alunos</h3>
                                        <v-text-field  
                                            v-model="prontuary"
                                            :rules="prontuaryRules"
                                            label="Prontuário"
                                            required
                                        ></v-text-field>
                                        <v-text-field  
                                            v-model="password"
                                            :rules="passwordRules"
                                            label="Senha"
                                            type="password"
                                            required
                                        ></v-text-field>
                                        <v-btn
                                            @click="submit"
                                            class="primary"
                                            
                                        >
                                            Enviar
                                        </v-btn>

                                    </v-form>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>        
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      prontuary: "",
      prontuaryRules: [],
      password: "",
      passwordRules: []
    };
  }
};
</script>



<style lang="scss">
#root {
  &,
  #background {
    width: 100%;
    height: 100%;
  }

  #background {
    position: absolute;
    top: 0px;
    left: 0px;
  }
}
</style>

