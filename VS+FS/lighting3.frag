#version 330 core

in vec4 frontColor;
out vec4 fragColor;



in vec3 normalF;
in vec3 colorF;
in vec2 texCoordF;
uniform mat3 normalMatrix;



in vec3  matambF;	//NOU
in vec3  matdiffF;
in vec3  matspecF;
in float matshinF;

void main()
{
   
    vec3 N = normalize(normalMatrix * normalF);
    fragColor = vec4 (colorF, 1.0) * N.z;
}

/*
   N = vector normal unitari en el punt
   V = vector unitari del punt cap a la cÃ mera 
   L = vector unitari del punt cap a la font de llum 
*/

vec4 light(vec3 N, vec3 V, vec3 L) 
{ 
  N = normalize(N); 
  V = normalize(V); 
  L = normalize(L); 
  vec3 R      = normalize( 2.0*dot(N, L)*N-L ); 
  float NdotL = max( 0.0, dot( N,L ) ); 
  float RdotV = max( 0.0, dot( R,V ) ); //R -> N V ->H Per Blinn
  float Idiff = NdotL; 
  float Ispec = 0; 
  if (NdotL>0) Ispec=pow( RdotV, matShininess ); 
  return 
    matAmbient  * lightAmbient + 
    matDiffuse  * lightDiffuse * Idiff + 
    matSpecular * lightSpecular * Ispec; 
}

