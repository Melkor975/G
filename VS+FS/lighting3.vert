#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

layout (location = 4) in vec3 matamb;
layout (location = 5) in vec3 matdiff;
layout (location = 6) in vec3 matspec;
layout (location = 7) in vec3 matshin;



out vec3  matambF;	//NOU
out vec3  matdiffF;
out vec3  matspecF;
out float matshinF;

out vec4 frontColor;
out vec2 vtexCoord;

out vec3 normalF;
out vec3 colorF;
out vec2 texCoordF;

uniform mat4 modelViewProjectionMatrix;
uniform mat3 normalMatrix;

void main()
{
 	matambF = matamb;	//NOU
	matdiffF = matdiff;
	matspecF = matspec;
	matshinF = matshin;
	
	colorF = color;
	normalF = normal;
	matamb = matambF;	gl_Position = modelViewProjectionMatrix * vec4(vertex, 1.0);
}
